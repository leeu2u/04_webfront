package edu.kh.colleciton.model.service;

import java.util.ArrayList;

import edu.kh.colleciton.model.vo.Student;

public class ListService {
	
	public void ex1() {
		
		//java.util 패키지
		//ArrayList의 기본생성자 -> 기본적으로 10칸짜리 생성
		//ctrl+ ArraList 클릭하면 상세 내용 볼 수 있음
		
//		ArrayList list = new ArrayList();
		//-----------
		
		ArrayList list = new ArrayList(3); // 3칸짜리 생성
		
		//add(E e) : 리스트에 마지막 위치에 객체 추가
		list.add(new Object());
		list.add(new String());
		list.add(new Student());
		
		//ArrayList의 크기 3을 초과해서 추가
		//자동으로 크기가 커져서 저장함
		list.add(new String("초과"));
	
//		System.out.println(list);
		
		// add(int index, E e) : index 위치에 E 객체를 추가
		list.add(1, new Student("홍길동", 15, "강남구", '남', 60));
		
//		System.out.println(list);
		
		/* [java.lang.Object@6504e3b2, 
		 * Student [name=홍길동, age=15, address=강남구, gender=남, 
		 * score=60], , Student [name=null, age=0, address=null, 
		 * gender=, score=0], 초과]
		 */
		
		//set 메소드: set(int index, E e): index 위치를 E 객체로 수정
		//								원래 위치하던 객체를 반환
		Object str = list.set(4, new String("수정된 문자열"));
		
		// 초과 : 원래 4번째 인덱스에 있던아이!
		// 떨어져나간 아이가 값으로 나옴(반환)
//		System.out.println(str);
//		
//		System.out.println(list);
		
		
		//remove(int index) : index 위치의 객체를 꺼내서 반환
		Object student = list.remove(2);
//		System.out.println(student);
		//반환 : Student [name=홍길동, age=15, address=강남구, gender=남, score=60]
//		System.out.println(list);
		/*[java.lang.Object@1c4af82c, ,
		 * Student [name=null, age=0, address=null, gender=
		 */
		
		
		//size(): List에 저장된 요소의 개수를 반환
		//get(int index): index에 위치한 객체를 얻어옴 (조회의 용도)
		for(int i=0; i<list.size(); i++) {
//			System.out.println("for문" + list.get(i));
			
			/*
			 * for문 java.lang.Object@1eb44e46
				for문
				for문 Student [name=null, age=0, address=null, gender=, score=0]
				for문수정된 문자열
			 */
			
			if(list.get(i) instanceof Student) {
				System.out.println(((Student)list.get(i)).getName());
				/*
				 * 홍길동
					null
				 */
			}
		}
		
	}

}
