#include <iostream>
#include <vector>

using namespace std;
int sumProduct(vector<int>);

int main(){
	int n;
	vector<int> b(n);

	cout << "Enter your array length " << endl;
	cin>>n;

	for(int i=0; i<n; i++){
		cin>>b[i];
	}
	cout << sumProduct(b) << endl;
	return 0;
}

int sumProduct(vector<int> b){
	int sizee = b.size();
	int max1 = -1;
	int max2 = -1;
	for (int i=0; i<sizee;i++){
		if(b[i] > max1){
			max1 = b[i];
		}
	}

	for (int j=0; j<sizee;j++){
		if(b[j] > max2 && b[j] != max1){
			max2 = b[j];
		}
	}
	
	return max1 * max2;
}
