#include <iostream>
using namespace std;

int main(){
	int number = 0, sum = 1;
	cout<<"Enter Number "<<endl;
	cin >> number;

	for(int i=number; i>0; i--){
		sum *= i;
	}
	cout<<sum<<endl;
	return 0;
}
