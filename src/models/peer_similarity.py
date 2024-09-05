import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy
from surprise.model_selection import cross_validate
student_df=pd.read_csv('students.csv')
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

student_df[['interaction_time', 'login_frequency', 'performance_score']] = student_df[['interaction_time', 'login_frequency', 'performance_score']].apply(lambda x: (x - x.min()) / (x.max() - x.min()))


feature_matrix = student_df[['interaction_time', 'login_frequency', 'performance_score']].values


similarity_matrix = cosine_similarity(feature_matrix)


similarity_df = pd.DataFrame(similarity_matrix, index=student_df['student_id'], columns=student_df['student_id'])


def recommend_peers(student_id, num_recommendations=2):
    if student_id not in similarity_df.index:
        return []

    student_similarities = similarity_df.loc[student_id]
    recommended_peers = student_similarities.sort_values(ascending=False).index[1:num_recommendations+1].tolist()
    return recommended_peers


recommended_peers = recommend_peers(student_id)
print("Recommended peers for {}: {}".format(student_id, recommended_peers))



student_id = "1"

if student_id in student_df['student_id'].values:
    print(f"Student ID {student_id} exists in the dataset.")
else:
    print(f"Student ID {student_id} does NOT exist in the dataset. Please check the ID.")




if student_id in similarity_df.index:
    student_similarities = similarity_df.loc[student_id]
    print(student_similarities)
else:
    print(f"Student ID {student_id} is not in the similarity matrix.")


def recommend_peers(student_id, num_recommendations=2):

    if student_id not in similarity_df.index:
        print(f"Student ID {student_id} not found in similarity matrix.")
        return []


    student_similarities = similarity_df.loc[student_id]
    print(f"Similarity scores for {student_id}:\n{student_similarities}")


    recommended_peers = student_similarities.sort_values(ascending=False).index[1:num_recommendations+1].tolist()
    print(f"Top {num_recommendations} recommended peers for {student_id}: {recommended_peers}")


    if not recommended_peers:
        print(f"No peers were found for student ID {student_id}. Try adjusting the number of recommendations or similarity criteria.")

    return recommended_peers


student_id = 1
recommended_peers = recommend_peers(student_id)
print("Recommended peers for {}: {}".format(student_id, recommended_peers))


