package com.siwoo.springblog.domain;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 6:06
 **/


public enum  ImageExtension {
    SVG, PNG, JPG, JPEG;

    public String getExtension() {
        return "." + this.name().toLowerCase();
    }
}
