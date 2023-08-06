let c = 0;
module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
	solve : function(A, B){
        c = 0;
        if(A === 1){
            if(B < 10) return 1;
            else return 0;
        }

        const dp = new Array(A).fill().map(a => new Array(B).fill(0));

        const x = this.numbers(A, B, 0, dp);
        // console.log(x);
        return c;

	},
    numbers : function(A, B, idx, dp){
        // console.log('here : ', A, B, idx, dp);
        if(A === 0 && B > 0){
            // console.log("B>0 : ", A, B, idx)
            return dp;
        }

        if( B < 0){
            // console.log("B < 0 : ", A, B, idx)
            return dp;
        }

        if(A === 1 && B <= 9 && B >= 0){
            // console.log("A === 1 B <= 9 : ", A, B, idx, dp)
            // console.log('success');
            c++;
            dp[idx][B] = c;
            return dp;
        }
        
        for(let i=0; i<10; i++){
            // console.log(i)
            if(idx > A){
                return dp;
            }
            if(idx === 0 && i === 0){
                continue;
            }
            // console.log(idx, B-i, dp)
            if(dp[idx][B-i] > 0){
                // console.log('found in dp : ', idx+1, B-1, dp[idx][B-1]);
                c = c + dp[idx][B-1]
                dp[idx+1][B-1] = c;
                continue;
            }

            dp = this.numbers(A-1, B-i, idx+1, dp);
            // console.log(dp)
        }
        return dp;
    }
};
