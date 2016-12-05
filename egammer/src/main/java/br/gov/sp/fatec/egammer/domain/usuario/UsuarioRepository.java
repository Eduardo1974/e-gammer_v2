package br.gov.sp.fatec.egammer.domain.usuario;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	public Usuario findByCodigo(final Long codigo);
	
	@Query("select u from Usuario u where u.email =?1 and u.senha = ?2")
	public Usuario buscarPorLoginESenha(final String login, final  String senha);
	
	public Usuario findByEmail(String email);

}
