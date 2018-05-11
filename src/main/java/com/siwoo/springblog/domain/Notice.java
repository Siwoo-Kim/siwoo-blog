package com.siwoo.springblog.domain;

import com.siwoo.springblog.domain.support.NoticeException;
import lombok.Data;
import lombok.EqualsAndHashCode;

import static com.siwoo.springblog.domain.BloggerRole.Role.ADMIN;
import static com.siwoo.springblog.domain.BloggerRole.Role;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 3:51
 **/

@Data
@Entity
@Table(name = "tbl_notice")
@EqualsAndHashCode(of = {"id", "title", "content"})
public class Notice {

    private static final Role NOTICE_FOR_ROLE = ADMIN;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private BasicDate basicDate;

    @NotNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "blogger_id")
    private Blogger blogger;

    @Column(name = "notice_likes")
    private int likes = 0;

    public void setBlogger(Blogger blogger) {
        if (blogger.hasRole(NOTICE_FOR_ROLE)) {
            this.blogger = blogger;
            return;
        }
        throw new NoticeException("The blogger does not have proper permission");
    }

}
