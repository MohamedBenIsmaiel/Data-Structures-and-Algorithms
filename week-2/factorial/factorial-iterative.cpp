#include <iostream>
using namespace std;

int main(){
	int number = 0, sum = 1;
	cout<<"Enter Positive Number "<<endl;
	cin >> number;
	if(number < 1){
		cout<<"Number should be positive "<<endl;
		return 0;
	}

	for(int i=number; i>0; i--){
		sum *= i;
	}
	cout<<sum<<endl;
	return 0;
}
