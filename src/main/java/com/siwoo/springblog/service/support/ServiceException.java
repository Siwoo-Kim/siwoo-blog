package com.siwoo.springblog.service.support;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 5:17
 **/


public class ServiceException extends RuntimeException {

    public ServiceException(String message) {
        super(message);
    }

}
