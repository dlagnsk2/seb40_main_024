//package com.codestates.server.oauth.service;//package com.codestates.server.oauth.service;
//
//import com.codestates.server.exception.BusinessLogicException;
//import com.codestates.server.exception.ExceptionCode;
//import com.codestates.server.member.entity.Member;
//import com.codestates.server.member.repository.MemberRepository;
//
//
//import com.codestates.server.member.service.MemberService;
//import com.codestates.server.oauth.info.OAuth2UserInfo;
//import java.security.Provider;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.InternalAuthenticationServiceException;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
//import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
//import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class CustomOAuth2Service extends DefaultOAuth2UserService {
//    private final MemberRepository memberRepository;
//
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//        OAuth2User user = super.loadUser(userRequest);
//
//        try {
//            return this.process(userRequest, user);
//        } catch (AuthenticationException exception) {
//            throw exception;
//        } catch (Exception exception) {
//            ex.printStackTrace();
//            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
//        }
//    }
//
//    private OAuth2User process(OAuth2UserRequest request, OAuth2User user) {
//        Provider provider = Provider.valueOf(
//            request.getClientRegistration().getRegistrationId());
//
//        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(provider,
//            user.getAttributes());
//
//        Member findMember = memberRepository.findMemberByEmail(userInfo.getEmail());
//
//        if (findMember != null) {
//            if (provider != findMember.getProvider()) {
//                throw new BusinessLogicException(ExceptionCode.PROVIDER_ERROR);
//
//            }
//        } else {
//            findMember = createMember(userInfo, provider);
//        }
//        return MemberService.createMember(findMember, user.getAttributes());
//        }
//
//    private Member createMember(OAuth2UserInfo userInfo, Provider provider) {
//
//    }
//
//    }
//
//}
