package com.codestates.server.oauth.handler;//package com.codestates.server.oauth.handler;
//
//import com.codestates.server.auth.utils.ErrorResponder;
//import io.jsonwebtoken.io.IOException;
//import javax.naming.AuthenticationException;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.stereotype.Component;
//
//@Slf4j
//@Component
//public class UserAuthenticationEntryPoint implements AuthenticationEntryPoint {
//
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse resopnse, AuthenticationException authException)
//        throws IOException, ServletException {
//        Exception exception = (Exception) request.getAttribute("exception");
//        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
//
//        logExceptionMessage(authException, exception);
//
//    }
//
//    private void logExceptionMessage(AuthenticationException authException, Exception exception) {
//        String message = exception != null ? exception.getMessage() : authException.getMessage();
//        log.warn("Unauthorized error: {}", message);
//    }
//
//
//}
