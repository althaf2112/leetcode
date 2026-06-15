import pandas as pd

def students_and_examinations(students: pd.DataFrame,
                              subjects: pd.DataFrame,
                              examinations: pd.DataFrame) -> pd.DataFrame:
    
    # Create all student-subject combinations
    result = students.merge(subjects, how="cross")
    
    # Count exam attendances
    exam_count = (
        examinations
        .groupby(["student_id", "subject_name"])
        .size()
        .reset_index(name="attended_exams")
    )
    
    # Merge counts with all combinations
    result = result.merge(
        exam_count,
        on=["student_id", "subject_name"],
        how="left"
    )
    
    # Replace NaN with 0
    result["attended_exams"] = result["attended_exams"].fillna(0).astype(int)
    
    # Sort the result
    result = result.sort_values(
        ["student_id", "subject_name"]
    )
    
    return result