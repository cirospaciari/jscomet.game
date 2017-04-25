import { Controller } from 'jscomet.core';

class HomeController extends Controller{
	
	constructor(){
		super();
		this.title = "Home";
	}
	
	public index(){
		return this.view("index");
	}
}
export default HomeController;