import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    result = views[views['author_id'] == views['viewer_id']]
    
    # Select unique author_ids and sort
    result = result[['author_id']].drop_duplicates().sort_values(by='author_id')
    
    # Rename column as 'id'
    result = result.rename(columns={'author_id': 'id'})
    
    return result