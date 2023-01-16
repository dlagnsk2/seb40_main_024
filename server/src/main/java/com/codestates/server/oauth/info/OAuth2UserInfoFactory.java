//package com.codestates.server.oauth.info;
//
//import com.codestates.server.oauth.entity.ProviderType;
//import java.util.Map;
//
//public class OAuth2UserInfoFactory {
//    public static OAuth2UserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
//        switch (providerType) {
//
//            case NAVER: return new NaverOAuth2UserInfo(attributes);
//            case KAKAO: return new KakaoUserInfo(attributes);
//            default: throw new IllegalArgumentException("Invalid Provider Type.");
//        }
//    }
//
//}
