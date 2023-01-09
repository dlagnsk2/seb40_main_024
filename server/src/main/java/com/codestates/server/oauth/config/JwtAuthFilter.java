package com.codestates.server.oauth.config;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.oauth.dto.OAuthMemberDto;
import com.codestates.server.oauth.service.TokenService;
import java.io.IOException;
import java.util.Arrays;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

@RequiredArgsConstructor
public class JwtAuthFilter extends GenericFilterBean {
    private final TokenService tokenService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = ((HttpServletRequest)request).getHeader("Auth");

        if (token != null && tokenService.verifyToken(token)) {
            String email = tokenService.getUid(token);

            OAuthMemberDto oAuthMemberDto = OAuthMemberDto.builder()
                .email(email)
                .name("이름")
                .picture("프로필 이미지").build();

            Authentication auth = getAuthentication(oAuthMemberDto);
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        chain.doFilter(request, response);
    }

    public Authentication getAuthentication(OAuthMemberDto OAuthmember) {
        return new UsernamePasswordAuthenticationToken(OAuthmember, "",
            Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
    }
}

