class RandomUtils {

   randomEmail() {
    let randEmail = '';
    randEmail = 'automation'+Math.floor(100000 + Math.random() * 900000)+'@gmail.com';

    return randEmail;
}
}