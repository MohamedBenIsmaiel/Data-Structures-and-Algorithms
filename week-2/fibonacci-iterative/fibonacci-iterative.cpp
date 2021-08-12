#include <iostream>
using namespace std;

int main(){
	int number = 0, first = 0, second = 1, tmp = 0;
	cout<<"Enter number "<<endl;
	cin >> number;
	for(int i=0; i<number;i++){
		tmp = first + second;
		first = second;
		second = tmp;
		
	}
	cout<<first<<endl;
	return 0;
}
