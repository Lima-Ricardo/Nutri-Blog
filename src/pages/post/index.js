import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./post.css";
import Api from "../../services/api";

export default function PostPorId() {
  const { id } = useParams();
  const idInt = parseInt(id);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    Api.loadPost()
      .then((res) => res.find((find) => find.id === idInt))
      .then((data) => {
        if (!data) {
          history.replace("/");
          return;
        }

        setPost(data);
        setLoading(false);
      });
  }, [history, id, idInt]);

  function salvaPost() {
    const minhaListaPost = localStorage.getItem("posts");
    let PostSalvos = JSON.parse(minhaListaPost) || [];
    const temPost = PostSalvos.some((postSalvo) => postSalvo.id === post.id);

    if (temPost) {
      alert("O post está salvo");
      return;
    }
    PostSalvos.push(post);
    localStorage.setItem("posts", JSON.stringify(PostSalvos));
    alert("Post salvo");
  }

  if (loading) {
    return (
      <div className="post-carregando">
        <h1>Loading...</h1>
        <img
          src="https://www.icegif.com/wp-content/uploads/loading-icegif.gif"
          alt="gif"
        />
      </div>
    );
  }

  return (
    <div className="conteiner-por-id">
      <div className="info">
        <div className="corpo-por-id">
          <article key={post.id}>
            <div className="img-e-botao">
              <img src={post.capa} alt={post.categoria} />
              <button onClick={salvaPost}>Salvar</button>
            </div>
            <div className="titulo-e-subtitulo">
              <strong>{post.titulo}</strong>
              <br />
              <p>{post.subtitulo}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}