class Solution {
    public int characterReplacement(String s, int k) {
        HashSet<Character> allLetters = new HashSet();
        
        for (int i = 0; i < s.length(); i++){
            allLetters.add(s.charAt(i));
        }
        
        int maxLength = 0;
        
        for (Character letter: allLetters){
            int start = 0;
            int count = 0;
            
            for (int end = 0; end < s.length(); ++end){
                if (s.charAt(end) == letter){
                    ++count;
                }
                
                while(!isValidWindow(start, end, count,k)){
                    if(s.charAt(start) == letter){
                        --count;
                    }
                    ++start;
                }
                maxLength = Math.max(maxLength, end + 1 - start);
            }
        }
        return maxLength;
        
    }
    
    private Boolean isValidWindow(int start, int end, int count, int k){
        return end + 1 - start - count <= k;
    }
}