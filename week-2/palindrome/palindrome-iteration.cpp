#include <iostream>
#include <string>
using namespace std;

int main(){
	string word = "";
	int count = 1;
	bool isPalindorme = false;
	cout<< "Enter word "<<endl;
	cin>>word;

	if(word.length() == 1 || word.length() == 0) cout<<"Palindrome"<<endl;
	for(int i=0; i<word.length();i++){
		if(word[i] ==  word[word.length() - count]){
			 isPalindorme = true;
		}else{
			 isPalindorme = false;
		}
		count++;
	}

	if(isPalindorme == true){
		cout<<"Palindrome"<<endl;
	}else{
		cout<<"Not Palindrome"<<endl;
	}
	return 0;
}
