package com.siwoo.springblog.support;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 1:19
 **/

public class DomainException extends RuntimeException{

    public DomainException(String message) {
        super(message);
    }
}
