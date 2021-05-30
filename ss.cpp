
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> pi;
#define F first
#define S second
#define PB push_back
#define REP(i,a,b) for(int i=a;i<=b;i++)
#define REV(i,b,a) for(int i=b;i>=a;i--)
#define fast ios_base::sync_with_stdio(false);cin.tie(0);cout.tie(0)
#define mem(a,b) memset(a,b,sizeof(a))
int main(){
		fast;
	    int tc;
		cin>>tc;
		while(tc--){
			 int n;
			 cin>>n;
			 int val;
			 cin>>val;
			 vector<int>v[n];v[0].pb(1);
			 for(i=1;i<n;i++){
			  cin>>val;
			  int lp=v[i-1][v[i-1].size()-1];
			  int ind=v[i-1].size()-1;
			  if(val!=1)
			  {
			   while(1){
				if(v[i-1][ind]==val-1){
				 ind--;
				 break;
			 }
			 ind--;
			}
		   }
			  f(j,0,ind)v[i].pb(v[i-1][j]);
			  v[i].pb(val);
		  }
		  f(i,0,n-1){
		   cout<<v[i][0];
		   f(j,1,v[i].size()-1)cout<<'.'<<v[i][j];
		   cout<<endl;
		  }

		}


	return 0;
}
