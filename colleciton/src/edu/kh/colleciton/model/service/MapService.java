package edu.kh.colleciton.model.service;

import java.util.HashMap;
import java.util.Map;

import edu.kh.colleciton.model.vo.Student;

public class MapService {

	// Map : key와 value 한 쌍이 데이터가 되어 이를 모아둔 객체
	// - key : Map에 저장된 데이터를 구분하는 용도
	// 			-> Set의 특징을 지님(순서 x, 중복 x, 
	//			equals(), hashCode() 오버라이딩 되어 있음)
	// - value : Map에 실제 저장된 값을 의미
	// 			-> List의 특징을 지님(중복 가능)
	
	
	
	public void ex1() {
		Map<Integer, String> map = new HashMap<Integer, String>();
		//Map.put(key, value): Map에 추가
		
		map.put(1, "홍길동");
		map.put(2, "고길동");
		map.put(3, "김길동");
		map.put(4, "박길동");
		map.put(5, "조길동");
		map.put(6, "홍길동");
		
		//key가 중복되면 덮어쓰기 됨
		map.put(1, "홍홍홍");
		
		System.out.println(map.toString());
	
	}
	
	
	public void ex2() {
		
		//map은 언제 사용하면 좋을까?
		//1) 재사용이 적은 vo를 대체하는 경우
		//2) 한번에 다량의 데이터를 전달하는 경우 
		//	데이터의 명확한 구분을 위해서 사용
		
		//Student 객체를 map으로 변경해서 사용
		Student std = new Student();
		Map<String, Object> student = new HashMap<String, Object>();
		
		//값 추가
		std.setName("홍길동");//vo
		student.put("name", "홍길동"); //map
		
		std.setAge(15);
		student.put("age", 15);
		
		std.setAddress("서울시 중구");
		student.put("address", "서울시 중구");
		
		std.setGender('남');
		student.put("gender", "남");
		
		std.setScore(100);
		student.put("scroe", 100);
		
		System.out.println(std);
		System.out.println(student);
		
		System.out.println(std.getName());
		System.out.println(std.getAge());
		System.out.println(std.getAddress());
		System.out.println(std.getGender());
		System.out.println(std.getScore());
		
		System.out.println("----------------");
		
		
		//keySet() : Map에서 key부분만을 추출하여 set형태로 반환
		for(String key : student.keySet())
			System.out.println(student.get(key));
		
		
	}
	
	
}
