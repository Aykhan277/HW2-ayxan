function some(a=[],myFunc)
        {
            let some=false;
            let newArr=[];
            myFunc=function isEven(x)
            {
                if(x%2==0)
                {
                    return true;
                }
                return false;
            }
            for(let i=0;i<a.length;i++)
            {
                newArr.push(myFunc(a[i]));
            }
            for(let j=0;j<newArr.length;j++)
            {
                if(newArr[j]===true)
                {
                    some=true;
                }
            }
            return some;
        }