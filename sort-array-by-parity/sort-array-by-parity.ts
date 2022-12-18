function sortArrayByParity(nums: number[]): number[] {
    let left = 0
    let right = nums.length - 1
    
    while(left < right){
        const leftV = nums[left]
        const rightV = nums[right]
        if(leftV % 2 === 0 && rightV % 2 !== 0 ){
            left++;
            right--;
            continue;
        }
        
        if(leftV % 2 === 0 && rightV % 2 === 0 ){
            left++;
            continue;
        }
        
        if(leftV % 2 !== 0 && rightV % 2 !== 0 ){
            right--;
            continue;
        }
        
        if(leftV % 2 !== 0 && rightV % 2 === 0 ){
            nums[left] = rightV;
            nums[right] = leftV;
            left++;
            right--;
            continue;
        }
    }
    
    return nums
    
};