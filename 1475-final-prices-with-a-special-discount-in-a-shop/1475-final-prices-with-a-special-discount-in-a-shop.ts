function finalPrices(prices: number[]): number[] {
  const stack: number[] = [];
  const ans: number[] = new Array(prices.length);

  for (let i = prices.length - 1; i >= 0; i--) {

    while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    const discount = stack.length > 0 ? stack[stack.length - 1] : 0;
    ans[i] = prices[i] - discount;

    stack.push(prices[i]);
  }

  return ans;
}