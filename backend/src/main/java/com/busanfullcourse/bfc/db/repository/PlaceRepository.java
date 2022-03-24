package com.busanfullcourse.bfc.db.repository;

import com.busanfullcourse.bfc.db.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long>, PlaceQueryRepository {

}