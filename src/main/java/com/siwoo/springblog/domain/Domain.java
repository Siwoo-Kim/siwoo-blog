package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:09
 **/

@Data
@Entity
@Table(name = "tbl_domain")
@EqualsAndHashCode(of = {"id", "name"})
public class Domain {

    private static final String IMG_RESOURCE_PATH = "/assets/img/domain/";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 2000)
    private String description;

    private BasicTime basicTime;

    private String imgName;


    @JsonProperty
    public String getImgPath() {
        return IMG_RESOURCE_PATH + imgName;
    }

}
