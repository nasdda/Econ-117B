import types from '../components/Practice/ProblemFormat/problem_types'
export default {
    "chapter1": {
        "problem1": {
            "answer": "No",
            "choices": [
                "Yes",
                "No",
                "It depends"
            ],
            "question": "H gave the wife $1 million. Would a gift tax return need to be filled?",
            "type": types.MULTIPLE_CHOICE,
            "incorrectText": "try harder",
            "correctText": "damn, you didn't have to cheat..."
        },
        "problem2": {
            "answer": "485k",
            "choices": [
                "500k",
                "15k",
                "515k",
                "485k"
            ],
            "question": "H gave his non-dependent daughter $500k, what is the amount of taxable gift?",
            "type": types.MULTIPLE_CHOICE,
            "hint": "it starts with a 4"
        },
        "problem3": {
            "answer": "True",
            "choices": [
                "True",
                "False"
            ],
            "question": "True or False: In order to calculate the potential gift tax, the donor would need to add taxable gifts made in prior years to the taxable gifts made in the current year ",
            "type": types.MULTIPLE_CHOICE
        },
        "problem4": {
            "answer": "Form Number: 709; Due: April 15",
            "choices": [
                "Form Number: 706; Due: April 15",
                "Form Number: 706; Due: Nine month after death",
                "Form Number: 709; Due: April 15",
                "Form Number: 709; Due: Nine month after death"
            ],
            "question": "What is the form number to be used to report taxable gifts and when is it due?",
            "type": types.MULTIPLE_CHOICE
        },
        "problem5": {
            "answer": "Form Number: 706; Due: Nine month after death",
            "choices": [
                "Form Number: 706; Due: April 15",
                "Form Number: 706; Due: Nine month after death",
                "Form Number: 709; Due: April 15",
                "Form Number: 709; Due: Nine month after death"
            ],
            "question": "What is the form number to be used to report estate tax and when is it due?",
            "type": types.MULTIPLE_CHOICE
        },
        "problem6": {
            "answer": "It's not required, but it should be filed",
            "choices": [
                "It is required, and it should be filed",
                "It's not required, but it should be filed",
                "It is required, but it should not be filed",
                "It is not required, and it should not be filed"
            ],
            "question": "W died in the current year. H, W's husband, is still living. The value of W's estate was $8,000,000. No prior taxable gifts were made.   Question: Must an estate tax return be filed? Should an estate tax return be filed?",
            "type": types.MULTIPLE_CHOICE
        },
        "problem7": {
            "answer": "C",
            "placeHolder": "Enter answer here",
            "question": "test problem C",
            "type": types.FREE_RESPONSE
        },
    },
    "chapter2": {
        "problem1": {
            "answer": "Mongol Empire",
            "choices": [
                "Qing Dynasty",
                "Mongol Empire",
                "Roman Empire"
            ],
            "question": "What Was the Largest Contiguous Empire in History?",
            "type": types.MULTIPLE_CHOICE
        },
        "problem2": {
            "answer": "Liberia",
            "placeHolder": "Answer here",
            "question": "Which African Country Named its Capital After a U.S. President?",
            "type": types.FREE_RESPONSE
        },
        "problem3": {
            "answer": "George Washington",
            "placeHolder": "First and last name",
            "question": "Who was the first US president?",
            "type": types.FREE_RESPONSE
        },
        "problem4": {
            "answer": [
                "sushi",
                "noodles",
                "poptart"
            ],
            "choices": [
                "numbers",
                "sushi",
                "shoes",
                "laptop",
                "noodles",
                "poptart"
            ],
            "question": "Which of the following are foods?",
            "type": types.ALL_THAT_APPLY
        },
        "problem5": {
            "answer": [
                "water"
            ],
            "choices": [
                "ashes",
                "water",
                "nugget"
            ],
            "question": "Which of the following are liquids?",
            "type": types.ALL_THAT_APPLY
        }
    }
}