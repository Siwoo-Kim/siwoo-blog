package com.siwoo.springblog.web.support;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletRequest;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-11 오후 4:09
 **/


@Slf4j
public class ControllerSupporter {

    public static URL hostPath(HttpServletRequest request) {
        try {
            return new URL(request.getScheme(), request.getServerName(), request.getServerPort(), request.getContextPath());
        }catch (MalformedURLException e) {
            log.error("Malformed URL : " + e.getMessage());
            return null;
        }
    }

    public static String hostPathString(HttpServletRequest request) {
        return hostPath(request).toString();
    }

}
