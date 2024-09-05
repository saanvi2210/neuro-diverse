import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.metrics import classification_report


data = pd.read_csv('student.csv')
print(data.head())


def calculate_skill_score(row):
    w2 = 0.33
    w3 = 0.33
    w4 = 0.33
    return (w2 * row['interaction_time'] +
            w3 * row['login_frequency'] +
            w4 * row['performance_score'])


data['skill_score'] = data.apply(calculate_skill_score, axis=1)

def categorize_performance(score):
    if 53 <= score < 65:
        return 'beginner'
    elif 64 <= score < 76:
        return 'intermediate'
    else:
        return 'advanced'
data.head()


def calculate_skill_score(row):
    w2 = 0.33
    w3 = 0.33
    w4 = 0.33
    return (w2 * row['interaction_time'] +
            w3 * row['login_frequency'] +
            w4 * row['performance_score'])


data['skill_score'] = data.apply(calculate_skill_score, axis=1)

def categorize_performance(score):
    if 53 <= score < 65:
        return 'beginner'
    elif 64 <= score < 76:
        return 'intermediate'
    else:
        return 'advanced'
data.head()

features = data[['interaction_time', 'login_frequency']]
labels = data['skill_level_encoded']

X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

features = data[['interaction_time', 'login_frequency', 'performance_score']]
labels = data['skill_level_encoded']

scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)


model = Sequential()
model.add(Dense(64, input_dim=X_train_scaled.shape[1], activation='relu'))
model.add(Dense(32, activation='relu'))
model.add(Dense(3, activation='softmax'))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

history = model.fit(X_train_scaled, y_train, epochs=100, batch_size=16, validation_split=0.2, shuffle=True)

y_pred = model.predict(X_test_scaled)
y_pred_classes = y_pred.argmax(axis=-1)

print(classification_report(y_test, y_pred_classes, target_names=label_encoder.classes_))
