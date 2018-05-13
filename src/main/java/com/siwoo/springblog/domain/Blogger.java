package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import static com.siwoo.springblog.domain.BloggerRole.Role;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 3:27
 **/

@Data
@Entity
@Table(name = "tbl_blogger")
@EqualsAndHashCode(of = {"id", "email", "password"})
public class Blogger {

    private static final String AVATAR_IMG_RESOURCE_PATH = "/assets/img/blogger/";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    @JsonIgnore
    private String password;

    private String name;

    private String nickName;

    private String avatarImgName;

    @OneToMany(mappedBy = "blogger",
            fetch = FetchType.EAGER,
            orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<BloggerRole> roles = new HashSet<>();

    public void addRole(BloggerRole role) {
        this.roles.add(role);
        if (role != null && role.getBlogger() != this) {
            role.setBlogger(this);
        }
    }

    public Set<Role> resolveRoles() {
        return this.roles.stream()
                .filter(Objects::nonNull)
                .map(BloggerRole::getRole)
                .collect(Collectors.toSet());
    }

    public boolean hasRole(Role role) {
        return resolveRoles().contains(role);
    }

    @JsonProperty
    public String getAvatarImgPath() {
        return AVATAR_IMG_RESOURCE_PATH + avatarImgName;
    }
}
