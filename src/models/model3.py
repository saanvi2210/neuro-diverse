import pandas as pd

student_data = pd.read_csv('student.csv')

from transformers import T5Tokenizer, T5ForConditionalGeneration

from transformers import pipeline


def generate_personalized_questions(student_id, performance_score, topic, difficulty="medium"):

    prompt = f"Generate a {difficulty} question on {topic} for a student with a performance score of {performance_score}."


    questions = question_generator(prompt, max_length=50, num_return_sequences=3)


    return [question['generated_text'] for question in questions]

    student_id = 1
    performance_score = 85
    topic = "Python programming"
    questions = generate_personalized_questions(student_id, performance_score, topic)
    print("Generated Questions:")
    for q in questions:
        print(q)

        def virtual_tutor_conversation(student_question, history=[]):

            new_input_ids = tokenizer.encode(student_question + tokenizer.eos_token, return_tensors='pt')


            bot_input_ids = torch.cat([torch.tensor(history), new_input_ids], dim=-1) if history else new_input_ids


            history = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)


            response = tokenizer.decode(history[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)

            return response, history

            student_question = "Can you help me understand Python functions?"
            response, history = virtual_tutor_conversation(student_question)
            print("Virtual Tutor Response:", response)

            student_question = "how are you?"
            response, history = virtual_tutor_conversation(student_question)
            print("Virtual Tutor Response:", response)

            student_question = "how was your day?"
            response, history = virtual_tutor_conversation(student_question)
            print("Virtual Tutor Response:", response)
