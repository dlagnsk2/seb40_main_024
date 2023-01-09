package com.codestates.server.oauth.handler;

import com.codestates.server.auth.jwt.JwtTokenizer;
import com.codestates.server.auth.utils.CustomAuthorityUtils;
import com.codestates.server.member.entity.Member;
//import com.codestates.server.member.entity.Provider;
import com.codestates.server.member.repository.MemberRepository;
import com.codestates.server.member.service.MemberService;
import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    public static String REDIRECT_URL = "http://localhost:8080/login/oauth2/code/google" ;

    public OAuth2SuccessHandler(JwtTokenizer jwtTokenizer,
        CustomAuthorityUtils authorityUtils, MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        try {
            String registrationId = ((OAuth2AuthenticationToken) authentication).getAuthorizedClientRegistrationId();
            if (registrationId.equals("google")) {
                // 구글 먼저
                var oAuth2User = (OAuth2User) authentication.getPrincipal();
                HashMap userInfo = oAuth2User.getAttribute("response");
                String email = userInfo.get("email").toString();
                String picture = userInfo.get("picture").toString();
                String name = userInfo.get("name").toString();
                List<String> authorities = authorityUtils.createRoles(email);

                saveMember(email, picture, name);
                redirect(request, response, email, authorities);
            }

//            } else if (registrationId.equals("kakao")) {
//                var oAuth2User = (OAuth2User) authentication.getPrincipal();
//                HashMap userInfo = oAuth2User.getAttribute("properties");
//                String nickname = userInfo.get("nickname").toString();
//                String profile_image = userInfo.get("profile_image").toString();
//                HashMap account = oAuth2User.getAttribute("kakao_account");
//                String email = account.get("email").toString();
//                List<String> authorities = authorityUtils.createRoles(email);
//
//                saveMember(email, profile_image, nickname);
//                redirect(request, response, email, authorities);
//
//            } else if (registrationId.equals("naver")) {
//                var oAuth2User = (OAuth2User) authentication.getPrincipal();
//                HashMap userInfo = oAuth2User.getAttribute("response");
//                String email = userInfo.get("email").toString();
//                String profile_image = userInfo.get("profile_image").toString();
//                String name = userInfo.get("name").toString();
//                List<String> authorities = authorityUtils.createRoles(email);
//
//                saveMember(email, profile_image, name);
//                redirect(request, response, email, authorities);
//            }

        } catch (Exception e) {
            throw e;
        }
    }

    private void saveMember(String email, String picture, String name) {

        if (!memberService.verifyExistEmail(email)) {
            Member member = new Member();
            member.setPicture(picture);
            member.setName(name);
            member.setEmail(email);
//            member.setCreatedAt(LocalDateTime);

            memberService.createMember(member);

        }

    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String email, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(email, authorities);
        String refreshToken = delegateRefreshToken(email);

        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

//    private void redirectKakao(HttpServletRequest request, HttpServletResponse response, String email, String provider, List<String> authorities) throws IOException {
//        String accessToken = delegateAccessToken(email, authorities, provider);
//        String refreshToken = delegateRefreshToken(email);
//
//        String uri = createKakaoURI(accessToken, refreshToken, request).toString();
//        getRedirectStrategy().sendRedirect(request, response, uri);
//    }

    private String delegateAccessToken(String email, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("roles", authorities);


        Date expiration = jwtTokenizer.getTokenExpiration(
            jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(
            jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateAccessToken(claims, email, expiration, base64EncodedSecretKey);

    }

    private String delegateRefreshToken(String email) {

        Date expiration = jwtTokenizer.getTokenExpiration(
            jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(
            jwtTokenizer.getSecretKey());
        String refreshToken = jwtTokenizer.generateRefreshToken(email, expiration,
            base64EncodedSecretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        return UriComponentsBuilder
            .newInstance()
            .scheme("http")
            .host("localhost")
//            .port(80)
            .path("/api/token")
            .queryParams(queryParams)
            .build()
            .toUri();
    }
//
//    private URI createKakaoURI(String accessToken, String refreshToken,
//        HttpServletRequest request) {
//
//        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
//        queryParams.add("access_token", accessToken);
//        queryParams.add("refresh_token", refreshToken);
//
//        return UriComponentsBuilder
//            .newInstance()
//            .scheme("http")
//            .host("localhost")
//            .port(3000)
//            .path("/api/token")
//            .queryParams(queryParams)
//            .build()
//            .toUri();
//    }

}
