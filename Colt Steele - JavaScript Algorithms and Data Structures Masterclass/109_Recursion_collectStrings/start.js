// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425986#overview

function collectStrings(obj) {}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

collectStrings(obj); // ["foo", "bar", "baz"])
