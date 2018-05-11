package com.siwoo.springblog.domain.support;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:07
 **/

public class DomainException extends RuntimeException{

    public DomainException(String message) {
        super(message);
    }

}
