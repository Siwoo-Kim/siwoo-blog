package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 3:56
 **/

@Data
@ToString(exclude = "blogger")
@Entity
@Table(name = "tbl_blogger_role")
@EqualsAndHashCode(of = {"id","role"})
public class BloggerRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "blogger_id")
    private Blogger blogger;

    @Enumerated(EnumType.STRING)
    private Role role;

    protected BloggerRole() {}

    public BloggerRole(Role role) {
        this.role = role;
    }

    public void setBlogger(Blogger blogger) {
        this.blogger = blogger;
        if(!blogger.getRoles().contains(this)) {
            this.blogger.addRole(this);
        }
    }

    public enum Role {
        ADMIN, GUEST
    }
}
