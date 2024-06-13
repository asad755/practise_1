console.log("start");
try {
    let a = "bilal";
    console.log(a);
}
catch (error) {
    console.log(error);
}
function f1() {
    try {
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
    }
    catch (error) {
        console.log(error);
    }
    console.log("f1");
}
f1();
export {};
