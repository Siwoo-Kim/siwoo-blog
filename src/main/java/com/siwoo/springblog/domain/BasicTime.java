package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.time.LocalDateTime;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:11
 **/

@Embeddable @ToString @Getter
@EqualsAndHashCode(of = {"created","updated"})
public class BasicTime {

    private LocalDateTime created;
    private LocalDateTime updated;

    public BasicTime(LocalDateTime created, LocalDateTime updated) {
        this.created = created;
        this.updated = updated;
    }

    public BasicTime() {}

    @JsonProperty
    public LocalDateTime lastUpdated() {
        return updated != null ? updated : created;
    }

    /**
     * @author SiWoo Kim,
     * @version 1.0.0
     *
     * newBasicTime return the instance only initiate the
     * created property
     *
     **/
    public static BasicTime newBasicTime() {
        return new BasicTime(LocalDateTime.now(), null);
    }

}
