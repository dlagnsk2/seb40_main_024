package com.codestates.server.oauth.dto;

import com.codestates.server.member.dto.MemberDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class OAuthMemberDto extends MemberDto {
    private String email;
    private String name;
    private String picture;

    @Builder
    public OAuthMemberDto(String email, String name, String picture) {
        this.email = email;
        this.name = name;
        this.picture = picture;
    }


}
