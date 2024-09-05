import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy
from surprise.model_selection import cross_validate
data = pd.read_csv('student.csv')
student_df=pd.read_csv('student.csv')
print(student_df.head())
student_df['item_id'] = student_df['student_id']
reader = Reader(rating_scale=(student_df['performance_score'].min(), student_df['performance_score'].max()))
data = Dataset.load_from_df(student_df[['student_id', 'item_id', 'performance_score']], reader)
trainset, testset = train_test_split(data, test_size=0.2)
model = SVD()
model.fit(trainset)
predictions = model.test(testset)
accuracy.rmse(predictions)

def recommend_improvements(student_id, num_recommendations=3):

    all_students = set(student_df['student_id'].unique())


    recommendations = []
    for sid in all_students:
        pred = model.predict(student_id, sid).est
        recommendations.append((sid, pred))


    recommendations.sort(key=lambda x: x[1], reverse=True)
    return recommendations[:num_recommendations]


student_id = 'Student_A'
recommended_improvements = recommend_improvements(student_id)
print("Recommended improvements for {}: {}".format(student_id, recommended_improvements))
