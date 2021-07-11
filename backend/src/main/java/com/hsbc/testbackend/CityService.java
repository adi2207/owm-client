package com.hsbc.testbackend;

import java.util.List;
import java.util.stream.Collectors;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CityService {

	public int findMatchingCities(String prefix) throws ParseException {
		CityResponse cityResponse = getAllCities();
		
		List<City> matchingCities = cityResponse.getCities().stream()
				.filter(city -> city.getName().toLowerCase().startsWith(prefix.toLowerCase()))
				.collect(Collectors.toList());
		
		return matchingCities.size();
	}

	private static CityResponse getAllCities() {
		CityResponse response = null;
		try {
			String uri = "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22";

			RestTemplate restTemplate = new RestTemplate();
			response = restTemplate.getForObject(uri, CityResponse.class);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return response;
	}

}