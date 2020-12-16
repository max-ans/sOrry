import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { ThumbsUp, MessageSquare } from 'react-feather';

import './apology.scss';

const Apology = ({
  fetchApologyInformations,
  isFetched,
  apologyInformation,
}) => {
  const { slug } = useParams();

  useEffect(() => {
    fetchApologyInformations(slug);
  }, [slug]);

  return (
    <main className="apology">
      {!isFetched && <Loader />}
      {isFetched && (
        <>
          <section className="apology-view">
            <h3 className="apology-title">
              {apologyInformation.title}
            </h3>
            <p className="apology-content">
              {apologyInformation.content}
            </p>
            <div className="apology-informations">
              <p className="apology-date">
                {apologyInformation.author.nickname} le {apologyInformation.createdAt}
              </p>
              <div className="apology-fame">
                <button
                  type="button"
                  className="comment-button"
                >
                  <MessageSquare
                    className="comment-icon"
                  />
                </button>
                <button
                  type="button"
                  className="like-button"
                >
                  <ThumbsUp
                    className="like-icon"
                  />
                </button>

                {apologyInformation.likes}
              </div>
            </div>
            <div className="apology-categories">
              {apologyInformation.categories.map((categorie) => (
                <div key={categorie.title} className="categories-item">
                  {categorie.title}
                </div>
              ))}
            </div>
            <hr />
            <div className="apology-commentary">
              <h3 className="comments-title">
                Commentaires :
              </h3>
              {apologyInformation.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="comment-item">
                    {comment.content}
                  </div>
                  <div className="comment-infos">
                    {comment.author.nickname}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

Apology.propTypes = {
  fetchApologyInformations: PropTypes.func.isRequired,
  isFetched: PropTypes.bool.isRequired,
  apologyInformation: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
    createdAt: PropTypes.string,
    categories: PropTypes.array,
    comments: PropTypes.array,
    author: PropTypes.shape({
      nickname: PropTypes.string,
    }),
  }),
};

Apology.defaultProps = {
  apologyInformation: {},
};

export default Apology;
