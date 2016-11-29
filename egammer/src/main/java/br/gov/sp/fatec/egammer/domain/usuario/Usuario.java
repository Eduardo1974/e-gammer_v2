package br.gov.sp.fatec.egammer.domain.usuario;

import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.autorizacao.Autorizacao;
import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "USUARIO")
public class Usuario implements UserDetails {

	private static final long serialVersionUID = -9074766109667932918L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "usu_codigo")
	@JsonView( {View.Usuario.class, View.Login.class})
	private Long codigo;

	@Column(name = "usu_nome", length = 250, nullable = false)
	@JsonView( {View.Usuario.class, View.Login.class})
	private String nome;

	@Column(name = "usu_email", length = 100, nullable = false)
	@JsonView(View.Usuario.class)
	private String email;

	@Column(name = "usu_senha", length = 50, nullable = false)
	@JsonView( View.Usuario.class)
	private String senha;
	
	@Column(name = "usu_tipo", length = 50, nullable = false)
	@JsonView( {View.Usuario.class, View.Login.class})
	private String tipo = "cliente";

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "UAU_USUARIO_AUTORIZACAO", joinColumns = { @JoinColumn(name = "USU_CODIGO") }, inverseJoinColumns = {
			@JoinColumn(name = "AUT_ID") })
	private List<Autorizacao> autorizacoes;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getCodigo() {
		return codigo;
	}

	public List<Autorizacao> getAutorizacoes() {
		return autorizacoes;
	}

	public void setAutorizacoes(List<Autorizacao> autorizacoes) {
		this.autorizacoes = autorizacoes;
	}

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.autorizacoes;
	}

	@Override
	@JsonIgnore
	public String getPassword() {
		return senha;
	}

	@Override
	@JsonIgnore
	public String getUsername() {
		return email;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}
}
