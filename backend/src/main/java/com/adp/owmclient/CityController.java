package com.adp.owmclient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cities")
public class CityController {
	@Autowired
	private CityService cityService;

	@GetMapping("/getCount/{prefix}")
	public int getCityCount(@PathVariable String prefix) {
		return cityService.findMatchingCities(prefix);
	}

}
