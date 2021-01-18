#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node
{
int data;
node *link;
};
struct node *front=NULL,*rear=NULL,*P,*temp;
void insert()
{
P=(struct node*)malloc(sizeof(struct node));
printf("enter the value");
scanf("%d",&P->data);
P->link=NULL;
if(front==NULL){
front=P;
rear=front;
}
else
{
rear->link=P;
}
}
void delet()
{
if(front==NULL)
{
printf("under flow");
}else{
if(front==rear)
{
temp=NULL;
rear=NULL ;
}else{
temp=front;
front=front->link;
}
printf("delete element");
}
}
void display()
{
P=(struct node*)malloc(sizeof(struct node));
P=front;
printf("the node is: \n");

while(P!=NULL)
{
printf("%d\t",P->data);
P=P->link;
}
}
void main()
{
int ch;
clrscr();
do
{
printf("\n 1.insert");
printf("\n 2. delete");
printf("\n 3.display");
printf("\n 4.exit");
printf("\n enter your choice");
scanf("%d",&ch);
switch(ch)
{
case 1:insert();break;
case 2:delet();break;
case 3:display();break;
case 4:exit(0);break;
case 5:default:
printf("enter curct chs");
}
}
while(ch<=4);
getch();
}
