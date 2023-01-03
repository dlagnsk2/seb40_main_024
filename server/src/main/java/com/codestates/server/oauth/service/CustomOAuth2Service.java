//package com.codestates.server.oauth.service;
//
//import com.codestates.server.member.entity.Member;
//import com.codestates.server.member.repository.MemberRepository;
//import javax.naming.AuthenticationException;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.InternalAuthenticationServiceException;
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
//        ProviderType providerType = ProviderType.valueOf(
//            request.getClientRegistration().getRegistrationId());
//
//        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(providerType,
//            user.getAttributes());
//
//        Member findMember = memberRepository.findMemberByEmail(userInfo.getEmail());
//
//        if (findMember != null) {
//            if (providerType != findMember.getProviderType()) {
//
//            }
//        }
//
//    }
//
//}
