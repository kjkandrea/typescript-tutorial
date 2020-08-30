// 10의 배수 100까지 출력하기

for (let i:number = 0; i < 100; i++ ) {
    const idx:number = i + 1
    if (idx % 10 === 0) {
        console.log(idx)
    }
}