#include <iostream>
#include <vector>

using namespace std;

long long getProduct(vector<int>&);
int main(){
	int n = 0;
	cin>>n;
	vector<int> vc(n);
	for(int i=0; i<n; i++){
		cin>>vc[i];
	}
	long long sum = getProduct(vc);
	cout << sum << endl;
	return 0;
}

long long getProduct(vector<int>& b){
	long long sum = 0;
	int sizee = b.size();
	for(int i=0; i<sizee; i++){
		// in second loop we begine from i+1 because we don't need to multiply the number with itself
		for(int j=i+1; j<sizee; j++){
			if(((long long) b[i]) * b[j] > sum){
				sum = ((long long) b[i]) * b[j];
			}
		}
	}
	return sum;
}
