import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./services/categories.service";
import { Category } from "./models/Category";

interface CategoryNode {
  name: string;
  children? : CategoryNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'client';
  categories: CategoryNode[] = [];
  isExpanded = true;

  ngOnInit(): void{
    this.categoriesService.getCategories().subscribe(
      res=> {
        let temp: any = res
        let sup = temp[0].super_category;
        let Node: CategoryNode = {name: sup, children: []};
        temp.forEach((element: Category) => {
          if (sup !== element.super_category){
            this.categories.push(Node);
            sup = element.super_category;
            Node = {name: sup, children: []};
          }
          Node.children?.push({name: element.sub_category});
        });
        this.categories.push(Node);
      });
    }

    constructor (private categoriesService: CategoriesService){
    }
}
