package com.codestates.server.member.service;


import com.codestates.server.auth.event.MemberRegistrationApplicationEvent;
import com.codestates.server.auth.utils.CustomAuthorityUtils;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Log4j2
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final ApplicationEventPublisher publisher;
//    private static RedisTemplate<String, String> redisTemplate = new RedisTemplate<>();


//    @Transactional
//    public static void logout(HttpServletRequest request, String email) {
//        redisTemplate.opsForValue().set(request.getHeader("Authorization"),"logout",30 * 60 * 1000L, TimeUnit.MILLISECONDS);
//        redisTemplate.delete(email);
//    }

    @Transactional
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        String encryptPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);


        Member savedMember = memberRepository.save(member);

        publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));
        return savedMember;
    }

    public Member findMember(String email) {
        Long id = findMemberId(email);
        return findVerifiedMember(id);
    }



    public Member findPassword(String email) {
        return findVerifiedMember(findMemberId(email));
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(String email ,Member member) {
        log.info("1번 통과");
        Member findMember = findVerifiedMember(findMemberId(email));
        log.info("2번 통과");

        Optional.ofNullable(member.getEmail()).ifPresent(findMember::setEmail);
        log.info("3번 통과");
        Optional.ofNullable(member.getName()).ifPresent(findMember::setName);
        log.info("4번 통과");
        if (member.getPassword() != null) {
            findMember.setPassword(
                    passwordEncoder.encode(member.getPassword()));
        }
        log.info("5번 통과");
        return memberRepository.save(findMember);
    }

//    public Page<Member> findAllMembers(int page, int size) {
//        return memberRepository.findAll(PageRequest.of(page , size ,
//                Sort.by("memberId").descending()));
//    }

//    public void deleteMember(String email) {
//        memberRepository.deleteById(findMemberId(email));
//    }

    @Transactional
    public void deleteMember(String email) {
        memberRepository.deleteById(findMemberId(email));
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.DUPLICATE_MEMBER);
    }

    public Long findMemberId(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember.getId();
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }
}
