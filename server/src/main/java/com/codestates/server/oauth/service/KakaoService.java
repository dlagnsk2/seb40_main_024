package com.codestates.server.oauth.service;

import com.codestates.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
@Slf4j
@RequiredArgsConstructor
public class KakaoService {
    private final MemberRepository memberRepository;

//    @Value("${spring.security.oauth2.client.registration.kakao.clientId}")
    private String clientId;

//    @Value("${spring.security.oauth2.client.registration.kakao.clientSecret}")
    private String clientSecret;

    private final String redirectUri = "http://refactoring-seb40-main-024.s3-website.ap-northeast-2.amazonaws.com/login/oauth2/code/kakao";
    private final String accessTokenUri = "https://kauth.kakao.com/oauth/token";
    private final String userInfoUri = "https://kapi.kakao.com/v2/user/me";

}
