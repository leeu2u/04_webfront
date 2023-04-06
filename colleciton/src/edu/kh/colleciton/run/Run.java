package edu.kh.colleciton.run;

import edu.kh.colleciton.model.service.ListService;
import edu.kh.colleciton.model.service.MapService;
import edu.kh.colleciton.model.service.SetService;

public class Run {

	public static void main(String[] args) {

		
		ListService service = new ListService();
//		service.ex1();
		
		SetService service2 = new SetService();
//		service2.ex1();
		
		SetService setService3 = new SetService();
//		setService3.ex2();
//		SetService3.ex3();
		
		MapService mapService = new MapService();
//		mapService.ex1();
		mapService.ex2();
	}

}
